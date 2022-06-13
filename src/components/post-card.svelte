<script>
    export let title;
    export let description;
    export let url;
</script>

<style>
    article {
        background-color: lightgray;
        padding: 2rem;
    }
</style>

<a href={url}>
    <article>
        <h1>{title}</h1>
        <p>{description}</p>
    </article>
</a>