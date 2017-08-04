# watsodoro [![Master][ico-travis-master]][link-travis] [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
                                                        
A simple wrapper around excellent [Watson](http://tailordev.github.io/Watson/) time tracker, for all of the [Pomodoro Technique®](https://cirillocompany.de/pages/pomodoro-technique) users out there. 

# Requirements

* [Watson](http://tailordev.github.io/Watson/)
* Nodejs

# Installation

For now, clone this repository:
```
git clone git@github.com:michalmatoga/watsodoro.git
```
And install:
```
cd watsodoro && npm i -g
```

# Usage
```
start [watson params]  Start watsodoro timer
```

Change work/break duration to your liking in `config/config.json`.
Then, start your first watsodoro:
```
watsodoro start some_project +some +tags
```
After break, resume working on the same task by omitting watson parameters:
```
watsodoro start
```

# Acknowledgements
Alarm sound source: https://freesound.org/people/kwahmah_02/sounds/250629/

[ico-travis-master]: https://travis-ci.org/michalmatoga/watsodoro.svg?branch=master
[link-travis]: https://travis-ci.org/michalmatoga/watsodoro
