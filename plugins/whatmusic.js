const _0x431782 = _0x21f7;
(function (_0x44ec5e, _0x56fe13) {
    const _0x317b03 = _0x21f7,
        _0x54cbc6 = _0x44ec5e();
    while (!![]) {
        try {
            const _0x27bfdf = parseInt(_0x317b03(0x131)) / 0x1 + parseInt(_0x317b03(0x12d)) / 0x2 + -parseInt(_0x317b03(0x133)) / 0x3 + parseInt(_0x317b03(0x13c)) / 0x4 + parseInt(_0x317b03(0x141)) / 0x5 * (parseInt(_0x317b03(0x144)) / 0x6) + parseInt(_0x317b03(0x12b)) / 0x7 * (-parseInt(_0x317b03(0x132)) / 0x8) + parseInt(_0x317b03(0x140)) / 0x9;
            if (_0x27bfdf === _0x56fe13) break;
            else _0x54cbc6['push'](_0x54cbc6['shift']());
        } catch (_0x401902) {
            _0x54cbc6['push'](_0x54cbc6['shift']());
        }
    }
}(_0x1c75, 0xf3784));

function _0x21f7(_0x7a037b, _0x5b3502) {
    const _0x1c755f = _0x1c75();
    return _0x21f7 = function (_0x21f71c, _0x242006) {
        _0x21f71c = _0x21f71c - 0x125;
        let _0x1985a6 = _0x1c755f[_0x21f71c];
        return _0x1985a6;
    }, _0x21f7(_0x7a037b, _0x5b3502);
}

function _0x1c75() {
    const _0x107ac5 = ['105462EFsZqe', '11834656wUpwdr', '3394470qeVvwD', 'identify', 'identify-eu-west-1.acrcloud.com', 'music', 'msg', 'mimetype', 'command', 'Not found', './tmp/', '3175776qvggwu', 'name', 'download', '*[ INFORMATION ] Reply Audio*', '6913827dpVyyW', '50705zKlXaA', 'join', 'quoted', '294uUIxcn', 'c33c767d683f78bd17d4bd4991955d81', 'map', '\x0a▢ Album: ', 'seconds', 'test', 'sender', 'writeFileSync', 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu', 'reply', '7IhZjhi', '\x0a└──────────────\x0a\x0a_simple bot whatsapp kiitsuneeMD_\x0a', '2887112hUeNWE', '\x0a▢ Released on: ', '\x0a▢ Artist: ', 'readFileSync'];
    _0x1c75 = function () {
        return _0x107ac5;
    };
    return _0x1c75();
}
import _0x45ec48 from 'fs';
import _0x5e3347 from 'acrcloud';
let acr = new _0x5e3347({
        'host': _0x431782(0x135),
        'access_key': _0x431782(0x145),
        'access_secret': _0x431782(0x129)
    }),
    handler = async _0x2b2463 => {
        const _0x5539b5 = _0x431782;
        let _0x22a64d = _0x2b2463[_0x5539b5(0x143)] ? _0x2b2463[_0x5539b5(0x143)] : _0x2b2463,
            _0x1d1a93 = (_0x22a64d[_0x5539b5(0x137)] || _0x22a64d)[_0x5539b5(0x138)] || '';
        if (/audio|video/ [_0x5539b5(0x126)](_0x1d1a93)) {
            if ((_0x22a64d['msg'] || _0x22a64d)[_0x5539b5(0x125)] > 0x14) return _0x2b2463['reply']('[ INFORMATION ]\x0a\x0aMaksimal 20 detik');
            let _0x5a6968 = await _0x22a64d[_0x5539b5(0x13e)](),
                _0x28ac17 = _0x1d1a93['split']('/')[0x1];
            _0x45ec48[_0x5539b5(0x128)](_0x5539b5(0x13b) + _0x2b2463[_0x5539b5(0x127)] + '.' + _0x28ac17, _0x5a6968);
            let _0x1f6275 = await acr[_0x5539b5(0x134)](_0x45ec48[_0x5539b5(0x130)]('./tmp/' + _0x2b2463['sender'] + '.' + _0x28ac17)),
                {
                    code: _0x2b3376,
                    msg: _0x17da5e
                } = _0x1f6275['status'];
            if (_0x2b3376 !== 0x0) throw _0x17da5e;
            let {
                title: _0x5d44bf,
                artists: _0x44c4c2,
                album: _0x48382b,
                genres: _0x100021,
                release_date: _0x34d0c4
            } = _0x1f6275['metadata'][_0x5539b5(0x136)][0x0], _0x32a315 = ('\x0a\x0a*≡ MUSIC INFO SEARCH RESULTS*\x0a\x0a┌─⊷ *WHAT MUSIC?* \x0a▢ Title: ' + _0x5d44bf + _0x5539b5(0x12f) + (_0x44c4c2 !== undefined ? _0x44c4c2['map'](_0x4dbfc9 => _0x4dbfc9['name'])[_0x5539b5(0x142)](', ') : _0x5539b5(0x13a)) + _0x5539b5(0x147) + (_0x48382b[_0x5539b5(0x13d)] || _0x5539b5(0x13a)) + ' \x0a▢ Genre: ' + (_0x100021 !== undefined ? _0x100021[_0x5539b5(0x146)](_0x3dcd64 => _0x3dcd64[_0x5539b5(0x13d)])[_0x5539b5(0x142)](', ') : 'Not found') + _0x5539b5(0x12e) + (_0x34d0c4 || _0x5539b5(0x13a)) + _0x5539b5(0x12c))['trim']();
            _0x45ec48['unlinkSync']('./tmp/' + _0x2b2463['sender'] + '.' + _0x28ac17), _0x2b2463[_0x5539b5(0x12a)](_0x32a315);
        } else throw _0x5539b5(0x13f);
    };
handler[_0x431782(0x139)] = /^musikapa|whatmusic|musikapakah$/i;
export default handler;