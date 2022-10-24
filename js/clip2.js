<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.11/clipboard.js" integrity="sha512-ePtegHW811NTnZd0Er1UxtBb8dizKEdSzANYy/UhxM40FC2yCWwb1CQrj03BPbrs6XdUkcHuyVn9Xq9q0Lm34g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
(function(){
    new Clipboard('#copy-button');
})();
var pre = document.getElementsByTagName('pre');
for (var i = 0; i < pre.length; i++) {
    var isLanguage = pre[i].children[0].className.indexOf('language-');
    if ( isLanguage === 0 ) {
            var button           = document.createElement('button');
                    button.className = 'copy-button';
                    button.textContent = 'Copy';
 
                    pre[i].appendChild(button);
        }
}
var copyCode = new Clipboard('.copy-button', {
    target: function(trigger) {
        return trigger.previousElementSibling;
    }
});
copyCode.on('success', function(event) {
    event.clearSelection();
    event.trigger.textContent = 'Copied';
    window.setTimeout(function() {
        event.trigger.textContent = 'Copy';
    }, 2000);
});
