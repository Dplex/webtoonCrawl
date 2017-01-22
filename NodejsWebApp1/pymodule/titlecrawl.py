# -*- coding:utf-8 -*-

from selenium import webdriver
from bs4 import BeautifulSoup
import urllib
import json
import re
import pymongo

class model:
    name = ""
    day = 1
    titleid = ""
    imgsrc = ""

driver = webdriver.PhantomJS()
URL = "http://comic.naver.com/webtoon/weekday.nhn"
driver.get(URL)
page_source = driver.page_source
SOUP = BeautifulSoup(page_source, 'html.parser')
thumblist = SOUP.find('div', {'class':'daily_all'}).find_all('div', {'class':'thumb'})
_model = model()
exp = re.compile(r".*titleId=(?P<titleid>\d+)&weekday=(?P<day>\D{3})\Z")

connection = pymongo.MongoClient("localhost", 27017)
db = connection.webtoon
collection = db.tests

for thumb in thumblist:
    a_thumb = thumb.find('a')
    href = a_thumb['href']
    matcher = exp.match(href)
    _model.day = matcher.group('day')
    _model.titleid = matcher.group('titleid')
    _model.name = a_thumb.find('img')['title']
    _model.imgsrc= a_thumb.find('img')['src']
    collection.insert(json.loads(json.dumps(_model, default=lambda o: o.__dict__, ensure_ascii=False, indent = 4, sort_keys=True)))
    print(json.loads(json.dumps(_model, default=lambda o: o.__dict__, ensure_ascii=False, indent = 4, sort_keys=True), encoding='utf-8'))
