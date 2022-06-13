<style>
    main {
        padding: 4vw;
    }
</style>

<script context="module">
    // load data
    export async function load({ fetch }) {
      // request data from endpoint
        const posts = await fetch(`/posts.json`).then((r) => r.json())
        console.log(posts)
        // assign it to the variable
        return {
            props: {posts}
        }
    }
</script>

<script>
    import PostCard from "/src/components/post-card.svelte";
    export let posts;
</script>

<main>
    <h1>Posts</h1>
    {#each posts as post }
        <PostCard {...post}/>
    {/each}
</main>