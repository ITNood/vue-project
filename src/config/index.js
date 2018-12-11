const config = {
    debug: true,
    // erp_base_url: process.env.NODE_ENV === 'development' ? 'http://erp.vm' : 'http://erp.ewasbbm.com',
    // cdn_base_url: process.env.NODE_ENV === 'development' ? 'http://erp.vm' : 'http://erp.ewasbbm.com'
    erp_base_url: '//' + window.location.hostname,
    cdn_base_url: '//' + window.location.hostname,
}

export default config
