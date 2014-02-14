#!/usr/bin/env python
import os
import sys


# Corrects some pathing issues in various contexts, such as cron jobs,
# and the project layout still being in Django 1.3 format.
from settings import PROJECT_ROOT, PROJECT_DIRNAME
os.chdir(PROJECT_ROOT)
sys.path.insert(0, os.path.abspath(os.path.join(PROJECT_ROOT, "..")))

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "settings")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
