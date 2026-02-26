<?php

use Illuminate\Support\Facades\Schedule;

Schedule::command('fetch:articles')->dailyAt('13:00');
