# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-04-24 09:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20190424_1436'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='img',
            field=models.ImageField(default='/static/img/TESLA.png', height_field=123, upload_to='img/%Y/%m/%d', verbose_name='文章图片', width_field=200),
        ),
    ]
