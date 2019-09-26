<script>
  import api from "@/api";
  
  export default {
    created() {
      api.get(`/unauthorized`)
        .then(res => res.data.resource = this.resource);
    },
    data() {
      return {
        resource: {}
      }
    }
  }
</script>