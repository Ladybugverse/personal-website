"""Check generated pages for broken local links, duplicate IDs and missing metadata."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import subprocess, sys
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'docs'
class Page(HTMLParser):
 def __init__(self):
  super().__init__(); self.ids=[]; self.links=[]; self.h1=0; self.title=False; self.description=False; self.lang=False
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a: self.ids.append(a['id'])
  for key in ['href','src']:
   if a.get(key): self.links.append(a[key])
  if tag=='h1': self.h1+=1
  if tag=='title': self.title=True
  if tag=='meta' and a.get('name')=='description' and a.get('content'): self.description=True
  if tag=='html' and a.get('lang')=='en': self.lang=True
pages={}
for f in OUT.rglob('*.html'):
 p=Page(); p.feed(f.read_text(encoding='utf-8')); pages[f.resolve()]=p
errors=[]
if (OUT / 'index.html').resolve() not in pages:
 errors.append('Missing generated home page')
if not pages:
 errors.append('No HTML pages generated')
for f,p in pages.items():
 if not(p.title and p.description and p.lang and p.h1==1): errors.append(f'{f}: missing metadata or incorrect h1 count')
 if len(p.ids)!=len(set(p.ids)): errors.append(f'{f}: duplicate IDs')
 for link in p.links:
  u=urlsplit(link)
  if u.scheme or u.netloc: continue
  if u.path.startswith('/personal-website/'):
   dest=(OUT / unquote(u.path.removeprefix('/personal-website/'))).resolve()
  elif u.path.startswith('/'):
   errors.append(f'{f}: unexpected absolute path {link}'); continue
  else:
   dest=(f.parent/unquote(u.path)).resolve() if u.path else f
  if dest.is_dir(): dest=dest/'index.html'
  if not dest.exists(): errors.append(f'{f}: broken local link {link}')
  if u.fragment and dest in pages and unquote(u.fragment) not in pages[dest].ids: errors.append(f'{f}: missing fragment {link}')
if errors: print('\n'.join(errors)); sys.exit(1)
print(f'PASS: {len(pages)} pages; local links, fragments, IDs, titles, descriptions, language and h1s')
