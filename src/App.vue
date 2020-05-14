<template>
    <v-app>
        <v-app-bar app>
            <h1 class="justify-center mx-auto headline"> My Cards </h1>
        </v-app-bar>
        <v-content>
            <CardComponent/>
        </v-content>
    </v-app>
</template>

<script>
    import CardComponent from "@/components/CardComponent";

    export default {
        name: 'App',

        components: {
            CardComponent
        },

        data: () => ({
            //
        }),
    };
</script>
