<template>
    <!-- Error 1: Single line for >1 attribute https://eslint.vuejs.org/rules/max-attributes-per-line.html-->
    <!-- Error 2: Using short vue directive syntax https://eslint.vuejs.org/rules/v-bind-style.html -->
    <!-- Error 3: Vue directive order https://eslint.vuejs.org/rules/attributes-order.html -->
    <div
        ref="foo"
        v-bind:foo="`bar`"
        class="foo"
        v-on:click="foo = 'bar'">
        Foo
    </div>
</template>

<script>

export default {
    name: 'Dirty',

    props: {
        fooProp: {
            type: String // Error 4: Props missing required attribute
        },
        barProp: {
            type: String,
            required: false // Error 5: Non-required props require a default return
        }
    },

    data() {
        return {
            foo: 'buzz'
        };
    },

    watch: {
        foo: function(newVal) {
            console.log(`WAT: ${newVal}`);
        }
    },

    beforeDestroy() {
        console.log('bai');
    },

    mounted() {
        console.log('hai');
    },

    // Error 6: Ordering of Vue component methods

};
</script>
