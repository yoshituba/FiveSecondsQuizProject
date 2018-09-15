(function(){
    'use strict';
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var result = document.getElementById('result');
    var startTime;
    var isStarted=false;

    start.addEventListener('click', function(){
        if(isStarted===true){
            return;
        }
        isStarted=true;
        startTime = Date.now();
        this.className = 'pushed';
        stop.className = '';
        result.textContent = '0.000';
        result.className = 'standby';
    });

    stop.addEventListener('click', function(){
        if (isStarted===false){
            return;
        }
        var elapsedTime;
        var diff;
        isStarted=false;
        elapsedTime = (Date.now() - startTime) / 1000;
        result.textContent = elapsedTime.toFixed(3);
        this.className = 'pushed';
        start.className = '';
        result.className = '';
        diff = elapsedTime - 5.0;
        if(Math.abs(diff)<1){
            result.className = 'perfect'
        }
    });
})()