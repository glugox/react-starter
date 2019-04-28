
const env = 'development';
const isProduction = env == 'production';

const config = {
    assets_path: isProduction ? 'http://127.0.0.1:8000/assets' : '/assets/',
    service_base_path: 'http://127.0.0.1:8000'
}

export default config;