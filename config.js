var config = {
  deploy_routes : function () {
    var routes = {},
        base,
        static_path;

    base = './build/';
    static_path =  base + '/static';
    routes = {
      base : base,
      templates: base + '/templates',
      static: static_path,
      styles: static_path + '/styles',
      scripts: static_path + '/scripts',
    }
    return routes;
  },
  static_url: function(url) {
    return this.settings.static_uri + '/' + url;
  },
  notifyConfig : function (options) {
      var _config = {}

      if (typeof options == "object") {
        return options
      }

      _config = {
        message : options,
        onLast  : true
      }

      return _config;
  }
};

module.exports = config;
