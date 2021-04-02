const path            = require("path");
const clean           = require("clean-webpack-plugin").CleanWebpackPlugin;
const vue             = require("vue-loader/lib/plugin");
const html            = require("html-webpack-plugin");

module.exports = env => 
{
    let app = "Client";

    console.info(`Building ${app} v${env.version}.`);

    let title = `${app} v${env.version}`;

    let mode = "development";

    const build = {
        mode: mode,
        entry: "./source/app.ts",
        output: {
            path: path.resolve(__dirname, "distro"),
            filename: "Client.js"
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                },
                {
                    test: /\.vue$/,
                    loader: "vue-loader",
                    options: {
                        esModule: true
                    }
                },
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                },
                {
                    test: /\.scss$/,
                    use: [
                        { loader: "style-loader" },
                        { loader: "css-loader" },
                        { loader: "postcss-loader", options: { plugins: () => [require("precss"), require("autoprefixer")] } },
                        { loader: "sass-loader" }
                    ]
                },
                {
                    test: /\.(png|svg|woff(2)?|eot|ttf)$/,
                    loader: "file-loader"
                }
            ]
        },
        resolve: {
            extensions: [".ts", ".js", ".vue", ".css", ".png", ".svg", ".ttf", ".woff", ".woff2", ".eot"],
            modules: [
                "node_modules"
            ]
        },
        plugins: [
            new clean({
                verbose: true
            }),
            new vue({
            }),
            new html({
                hash: true,
                template: "./source/index.html",
                filename: "./index.html",
                favicon: "./source/_resources/images/icon-16.png",
                title: title
            })
        ]
    };

    if (mode === "development")
    {
        build.devtool = "inline-source-map";

        build.devServer = {
            historyApiFallback: true
        };
    }

    return build;
};
