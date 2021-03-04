import { RenderPageResult } from "next/dist/next-server/lib/utils";
import Document, { DocumentContext } from "next/document";
import { ReactElement } from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<{
        styles: JSX.Element;
        html: string;
        head?: (JSX.Element | null)[] | undefined;
    }> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
                originalRenderPage({
                    enhanceApp: (App) => (props): ReactElement => sheet.collectStyles(<App {...props} />)
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            };
        } finally {
            sheet.seal();
        }
    }
}
