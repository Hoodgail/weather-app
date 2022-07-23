/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	console.log('handle ' + event.url.pathname);
	// if (event.url.pathname.startsWith('/custom')) {
	// 	return new Response('custom response');
	// }
	// event.request.headers.set('Service-Worker-Allowed', '/');
	// console.log('==>\n', event.request.headers, '\n<==\n');
	const response = await resolve(event, {
		ssr: false
	});
	return response;
}
