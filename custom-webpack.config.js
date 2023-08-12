// webpack.config.js

// Gerekli modülleri dahil ediyoruz
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Uygulamanın başlangıç noktası
  entry: './src/main.jsx',

  // Çıktının nereye ve hangi isimde kaydedileceği bilgisi
  output: {
    path: path.resolve(__dirname, 'dist'), // Çıktı dosyasının kaydedileceği yol
    filename: 'bundle.js', // Çıktı dosyasının adı
  },

  module: {
    rules: [
      {
        // JS ve JSX dosyalarını belirtiyoruz
        test: /\.(js|jsx)$/,
        // node_modules klasöründeki dosyaları dışarıda bırakıyoruz
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babel loader'ını kullanıyoruz
          options: {
            // Babel için hangi önayarları kullanacağımızı belirtiyoruz
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  // Kullanılan eklentileri tanımlıyoruz
  plugins: [
    // Bu eklenti, çıktı olarak bir HTML dosyası oluşturur ve içerisine JS dosyasını otomatik ekler
    new HtmlWebpackPlugin({
      template: './src/index.html', // Kullanılacak HTML şablonunu belirtiyoruz
    }),
  ],

  // Geliştirme sunucusunun ayarları
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Geliştirme sunucusunun hangi klasörü servis edeceğini belirtiyoruz
    compress: true, // Geliştirme sunucusundaki dosyaların sıkıştırılıp sıkıştırılmayacağını belirtiyoruz
    port: 3000, // Geliştirme sunucusunun hangi portta çalışacağını belirtiyoruz
  },

  // Hangi dosya uzantılarının otomatik olarak tanınacağını belirtiyoruz
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
