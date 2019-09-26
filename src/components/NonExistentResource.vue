<script>
  import api from "@/api";

  export default {
    created() {
      api.get(`/not-found`)
        .then(res => res.data.resource = this.resource);
    },
    data() {
      return {
        resource: {}
      }
    }
  }
</script>