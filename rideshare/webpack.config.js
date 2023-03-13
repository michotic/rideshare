const path = require("path");

module.exports = {
  entry: "./frontend/index.js", // path to our input file

  output: {
    filename: "index-bundle.js", // output bundle file name
    path: path.resolve(__dirname, "./static"), // path to our Django static directory
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
    },
    extensions: [".js", ".jsx", ".ts"],
  },

  // Set babel loader as default for React files
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        parser: {
          amd: false,
        },
      },
      {
        test: /\.ts$/i,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  stats: {
    errorDetails: true,
  },
};
