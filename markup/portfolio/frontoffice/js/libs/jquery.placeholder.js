if (!Modernizr.input.placeholder) {

    $('input[placeholder]')
        .each(function() {

            var $this = $(this);

            this.$placeholder = $('<div class="placeholder"></div>')
                .text($this.attr('placeholder'))
                .click(function(){
                    this.$input.focus();
                });

            this.$placeholder[0].$input = $this;

            $this
                .after(this.$placeholder)
                .focus(function() { this.$placeholder.hide() })
                .blur( function() { this.$placeholder.show() });
        });
}