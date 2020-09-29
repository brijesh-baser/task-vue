<script>
export default {
    name: "Home",
    created() {
        if(localStorage.token) {
            this.$router.push('/today-task');
        } else {
            this.$router.push('/login');
        }
    }
}
</script>