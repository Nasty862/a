

var sticky = UIkit.sticky('#sticky', {
    offset: 60
});
UIkit.sticky('.sticky', {
    offset: 50,
    start: 100
});

// Если компонент поддерживает Primary options.
UIkit.drop('#drop', 'top-left');
var sticky = UIkit.sticky('#sticky');
UIkit.mixin({
    data: {
        offset: 50,
        start: 100
    }
}, 'sticky');
// Passing a selector and an options object.
var sticky = UIkit.sticky('.sticky', {
    offset: 50,
    top: 100
});

// Functional components should omit the 'element' argument.
var notifications = UIkit.notification('MyMessage', 'danger');
// Sticky is now the prior initialised components
var sticky = UIkit.sticky('.sticky');
UIkit.offcanvas('#offcanvas').toggle();
UIkit.util.on('#offcanvas', 'show', function () {
    // do something
});
// Calls the update hook on components registered on the element itself, it's parents and children.
UIkit.update(element = document.body, type = 'update');

// Updates the component itself.
component.$emit(type = 'update');
// Destroys the component. For example unbind its event listeners.
component.$destroy();

// Also destroys the component, but also removes the element from the DOM.
component.$destroy(true);
document.addEventListener('uikit:init', () => {
    // делаем что-то
})
UIkit.slider(element).show(index);
UIkit.slider(element, options);
UIkit.slider(element).startAutoplay();
UIkit.slider(element).stopAutoplay();


