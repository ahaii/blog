# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-04-24 12:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_auto_20190424_1758'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='img',
            field=models.ImageField(default='/static/img/TESLA.png', upload_to='img/%Y/%m/%d', verbose_name='文章图片'),
        ),
    ]