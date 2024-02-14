module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/home/:path*',
        destination: '/smart-home-automation/:path*',
        permanent: true,
      },
      {
        source: '/workspace',
        destination: '/office-automation',
        permanent: true,
      },
      {
        source: '/apartment',
        destination: '/smart-home-iot-solutions',
        permanent: true,
      },
      {
        source: '/iot/industry',
        destination: '/iot/industrial-iot-solutions',
        permanent: true,
      },
    ]
  }
};
