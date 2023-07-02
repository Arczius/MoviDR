export default defineEventHandler(async (event) => {
  if (event.context.params) {
    // const config = useRuntimeConfig();
    const items = await $fetch(
      `https://api.themoviedb.org/3/trending/${event.context.params.item}/week`,
      {
        headers: {
          Authorization: `Bearer ${useRuntimeConfig().public.tmdb}`,
        },
      }
    );
    return {
      param: event.context.params?.item,
      items: await items,
      token: useRuntimeConfig(),
    };
  }
});
