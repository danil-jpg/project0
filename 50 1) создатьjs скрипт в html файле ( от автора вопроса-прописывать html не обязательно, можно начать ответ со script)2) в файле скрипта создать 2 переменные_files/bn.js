/**
 * bn.js dynamic js code mini from group: 3 
 */
(function() {
    let banners = {
        initialized: false,
        ym_id: null,
        "android": {"1":{"src":"https:\/\/e-eduanswers.com\/bn-mini\/3.png","href":"https:\/\/play.google.com\/store\/apps\/details?id=com.interitus.newemojipuzzle","timeout":"0","position":"bottom","target":"miniband"},"2":{"src":"https:\/\/e-eduanswers.com\/bn-mini\/4.png","href":"https:\/\/play.google.com\/store\/apps\/details?id=com.interitus.newemojipuzzle","timeout":"0","position":"top","target":"miniband2"}},
        "iphone": {"1":{"src":"https:\/\/e-eduanswers.com\/bn-mini\/5.png","href":"","timeout":"0","position":"bottom","target":"miniios"},"2":{"src":"https:\/\/e-eduanswers.com\/bn-mini\/6.png","href":"","timeout":"0","position":"top","target":"miniios2"}},
        platform: null,
        interval: 0,
        top: null,
        rotate: 2,
        bn_showing: [],
        banner: {
            goal: null,
            src: null,
            href: null,
            timeout: 0,
            key: null
        },
        shows: 0,
        getYmID: function(callback) {
            if (window.Ya && Ya._metrika && Ya._metrika.getCounters() && Ya._metrika.getCounters()[0] && Ya._metrika.getCounters()[0].id) {
                this.ym_id = Ya._metrika.getCounters()[0].id;
            }
            if (!this.ym_id || typeof $ != "function") {
                setTimeout(function() {
                    banners.getYmID(callback);
                }, 400);
            } else {
                return callback();
            }
        },
        imageClick: function(e) {
            if (e.data.ym_id != 1 && e.data.banner.goal) {
                ym(e.data.ym_id, 'reachGoal', e.data.banner.goal);
            }
            if (e.data.banner.href) {
                window.open(e.data.banner.href) || (window.location.href = e.data.banner.href);
            }
            $("#m-banners").remove();
            if (banners.rotate > banners.shows) {
                banners.init();
            }
        },
        closeClicks: [
            function(e) {
            e.data.showBanners();
            // $("#m-banners").remove();
            // banners.initialized = false;
        },
            function(e) {
                $("#m-banners").remove();
            }
        ],
        setPlatform: function(ua) {
            if (this.platform) {
                return;
            }
            ua.match(/android/i) && (this.platform = "android");
            ua.match(/iphone/i) && (this.platform = "iphone");
        },
        setRandBanner: function(obj) {
            (this.ym_id != 1) && JSON.parse(this.getCookie("bn_showing") || "[]").forEach(function(k) {
                delete obj[k];
            });
            let arr_keys = Object.keys(obj);
            if (arr_keys.length == 0) {
                $("#m-banners").remove();
                return false;
            }
            let rand = Math.floor(Math.random() * arr_keys.length),
                key = arr_keys[rand];
            this.banner.key = key;
            this.banner.goal = obj[key].target;
            this.banner.src = obj[key].src + "?" + Math.random();
            this.banner.href = obj[key].href;
            this.banner.timeout = obj[key].timeout;
            this.banner.position = obj[key].position;
            delete obj[key];
            return true;
        },
        showBanners: function() {
            if (!this.setRandBanner(this[this.platform])) {
                return;
            }
            this.bn_showing.push(this.banner.key);
            $("#m-banners .bn-close").hide();
            if (this.banner.position == "top" || this.top) {
                $("#m-banners").css({"top":(this.top || 0)+"px", "bottom":"auto"});
            } else {
                $("#m-banners").css({"top":"auto","bottom":0});
            }
            $("#m-banners .bn-img>img, #m-banners .bn-close").off();
            $("#m-banners .bn-img").html('<img style="max-height:80vh;width:100%;transform:scale(1);transition:margin .8s;margin-left:-200%;" onload="this.style.marginLeft=\'0\';" src="' + this.banner.src + '" alt="+" />');
            // $("#m-banners .bn-timeout").show();
            $("#m-banners .bn-img>img").one("click", this, this.imageClick);
            $("#m-banners .bn-close").one("click", this, this.closeClicks[this.shows]);
            this.timer(this.banner.timeout);
            $("#m-banners").css({
                "display": "flex"
            });
            this.shows++;
        },
        timer: function (t) {
            if (t <= 0) {
                // $("#m-banners .bn-timeout").hide();
                $("#m-banners .bn-close").fadeIn(800);
                return;
            }
            // $("#m-banners .bn-timeout").html(t);
            t--;
            setTimeout(function () {
                banners.timer(t);
            }, 1000);
        },
        init: function() {
            this.setPlatform(navigator.userAgent);
            if (!this.platform || $("#m-banners").length) {
                banners.initialized = false;
                return;
            }
            $("#m-banners").remove();
$('body').append('<div id="m-banners" style="position:fixed;width:100%;left:0;z-index:19999999;display:none;flex-direction: column;justify-content: center;align-items: center;">\
    <div style="display: flex;align-items: center;justify-content: center;flex-direction: column;max-height:80vh;max-width:100%;width:100%;padding:10px;">\
    <div class="bn-img" style="width:100%;text-align:center;overflow: hidden;"></div>\
    <div class="bn-close" style="position: absolute;top: 2px;left: 2px;padding: 10px;cursor: pointer;"><div style="font-family:Arial;font-size: 21px;text-align: center;width: 15px;height: 15px;color: rgb(0, 0, 0);background: rgb(255, 255, 255);line-height: 1;border: 1px solid rgb(0, 0, 0);border-radius:50%;display: flex;flex-direction: column;justify-content: center;align-items: center;">&times;</div></div>\
    <div class="bn-timeout" style="position:absolute;top:10px;right:10px;font-size: 18px;text-align: center;width: 30px;height: 30px;color: #fff;background: #000;line-height: 28px;cursor: pointer;border: 1px solid rgb(58 47 47 / 22%);border-radius:50%;display:none;">0</div>\
</div></div>');
            document.querySelectorAll("iframe").forEach(function(el) {
                if (el.style.zIndex) {
                    el.style.zIndex = el.style.zIndex - 1;
                }
            });
            this.showBanners();
        },
        setCookie: function (name, value, expires, path, domain, secure) {
            expires instanceof Date ? expires = expires.toGMTString() : typeof (expires) == 'number' && (expires = (new Date(+(new Date) + expires * 1e3)).toGMTString());
            var r = [name + "=" + escape(value)],
                s, i;
            for (i in s = {
                    expires: expires,
                    path: path,
                    domain: domain
                }) {
                s[i] && r.push(i + "=" + s[i]);
            }
            return secure && r.push("secure"), document.cookie = r.join(";"), true;
        },
        getCookie: function (name) {
            var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }
    }
    window.addEventListener("load", function(e) {
        if (banners.initialized) {
            return;
        }
        banners.initialized = true;
        setTimeout(function() {
            banners.getYmID(function() {
                banners.init();
            });
        }, 3000);
    });
    window.addEventListener("unload", function(e) {
        if (banners.ym_id != 1 && (banners.bn_showing.length >= banners.rotate || Object.keys(banners[banners.platform]).length == 0)) {
            let bn_showing = JSON.parse(banners.getCookie("bn_showing") || "[]");
            banners.bn_showing.forEach(function (key) {
                bn_showing.push(key);
            });
            banners.setCookie("bn_showing", JSON.stringify(bn_showing), banners.interval, '/');
        }
    });
})();
