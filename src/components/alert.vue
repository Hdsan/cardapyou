<template>
     <v-dialog id="dialog" persistent max-width="300" v-model="show">
        <v-card color="green">
            <v-card-title primary-title>
                {{title}}
            </v-card-title>
            <img src="../assets/logo.png" alt="logo" id="logoImg">
            {{message}}
            <v-card-actions>
                <v-btn block
                @click="$router.push({ name: 'Login' })"
                 color="black">Ok</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>

export default({
    props:{
        show: Boolean,
        message: String,
        title: String,
        color: String
    }
})
</script>
<style>
.v-dialog__container{
    display: grid !important;
}
#logoImg{
    height: 300px;
}

</style>
