$(".tracked-video").on('click', function () {
    players.forEach(function (instance) {
        instance.on('playing', function () {
            window.galleryEventLogger.logVideoUserInteractionEvent({
                eventType: window.galleryEventLogger.videoEventTypes.started,
                state: {
                    currentTime: instance.currentTime,
                    duration: instance.duration,
                }
            });
        });
        instance.on('pause', function () {
            window.galleryEventLogger.logVideoUserInteractionEvent({
                eventType: window.galleryEventLogger.videoEventTypes.paused,
                state: {
                    currentTime: instance.currentTime,
                    duration: instance.duration,
                }
            });
        });
    });
});
