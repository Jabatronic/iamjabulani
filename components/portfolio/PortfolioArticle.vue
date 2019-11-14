<template>
    <article class="tile is-child notification is-primary is-folio-thumbnail">
    <div
        class="bg-image is-overlay"
        :style="{ backgroundImage: `url(${img1.src})`}"
    />
    <div class="is-overlay folio-thumbnail-details">
        <p class="title">
        Middle tile
        </p>
        <p class="subtitle">
        With an image
        </p>
    </div>
    </article>  
</template>