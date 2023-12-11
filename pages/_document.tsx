import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class CustomDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        const { __NEXT_DATA__ } = this.props;
        const pathname = __NEXT_DATA__

        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    {pathname.page.startsWith('/command-center') && (
                        <div id="globalLoader">
                            <img src="/assets/logogif.gif" alt="" />
                        </div>
                    )}
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
