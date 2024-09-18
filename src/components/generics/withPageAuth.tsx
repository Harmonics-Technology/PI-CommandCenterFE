import { OpenAPI } from 'src/services';

export function withPageAuth(gssp: any) {
    return async (context: any) => {
        const { req } = context;
        const token = req.cookies.token;
        // console.log(req.url);

        if (!token) {
            // Redirect to login page
            return {
                redirect: {
                    destination: `/command-center/login?from=${encodeURIComponent(req.url)}`,
                    statusCode: 302,
                },
            };
        }

        OpenAPI.TOKEN = token;
        OpenAPI.BASE =
            (process.env.NEXT_PUBLIC_API_BASEURL as string) ||
            'https://timba-command-center-staging.azurewebsites.net';

        return await gssp(context); // Continue on to call `getServerSideProps` logic
    };
}
