(function () {
    window['yandexChatWidgetCallback'] = function() {
        try {
            window.yandexChatWidget = new Ya.ChatWidget({
                guid: 'de2fb6d4-b503-4ab4-9ed1-00737d669974',
                buttonText: 'Есть вопрос? Мы в сети!',
                title: 'Чат',
                theme: 'dark',
                collapsedDesktop: 'never',
                collapsedTouch: 'always'
            });
        } catch(e) { }
    };
    var n = document.getElementsByTagName('script')[0],
        s = document.createElement('script');
    s.async = true;
    s.src = 'https://chat.s3.yandex.net/widget.js';
    n.parentNode.insertBefore(s, n);
})();
