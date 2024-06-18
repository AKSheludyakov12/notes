
import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoaders } from './Loaders/buildCssLoaders'

export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }



    const scssLoader = buildCssLoaders(isDev)
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return [
        svgLoader,
        fileLoader,
        scssLoader,
        typescriptLoader

    ]
}
