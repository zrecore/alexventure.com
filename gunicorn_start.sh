#!/bin/bash
NAME="alexventure"
DJANGODIR=/var/www/alexventure.com/alexventure
SOCKFILE=/var/www/alexventure.com/alexventure/run/gunicorn.sock
USER=www-data #aalbino
GROUP=www-data
NUM_WORKERS=1
DJANGO_SETTINGS_MODULE=alexventure.settings
DJANGO_WSGI_MODULE=alexventure.wsgi

echo "Starting $NAME as `whoami`"

# Activate virtual env
cd $DJANGODIR
source /var/www/alexventure.com/py3/bin/activate
export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
export PYTHONPATH=$DJANGODIR:$PYTHONPATH

# Create the run directory if it doesn't exist
RUNDIR=$(dirname $SOCKFILE)
test -d $RUNDIR || mkdir -p $RUNDIR

# Start Django Unicorn
exec /var/www/alexventure.com/py3/bin/gunicorn ${DJANGO_WSGI_MODULE}:application \
 --name $NAME \
 --workers $NUM_WORKERS \
 --user $USER \
 --bind=unix:$SOCKFILE
