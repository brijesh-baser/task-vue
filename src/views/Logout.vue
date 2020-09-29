<script>
export default {
    name: "Logout",
    created() {
        localStorage.clear("token");
        this.$router.push('/login');
    }
}
</script>