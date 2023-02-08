import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const scssLoader = {

        test: /\.s[ac]ss$/i,
            use: [
        // Creates `style` nodes from JS strings
        options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: options.isDev
                                ? '[path][name]__[local]--[hash:base64:5]'
                                : '[hash:base64:8]'
                        },
                    }
                },
        // Compiles Sass to CSS
        "sass-loader",
    ],

    }

    return [
        typeScriptLoader,
        scssLoader,

    ]
}