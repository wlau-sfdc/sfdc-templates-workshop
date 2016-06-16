({
    init : function(component, event, helper) {

        var observer = new MutationObserver(function(mutations) {
            helper.updateBackgroundClass();
        });

        observer.observe(document.body, { childList: true, subtree: true, attributes: false, characterData: false });
    }
})