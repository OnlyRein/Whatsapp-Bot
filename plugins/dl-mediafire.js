function _0x2a4a() {
    const _0x403eff = ['chat', 'help', '90256suZQRJ', '27805712MkyvIQ', '5115180LnmsVZ', '\x0a▢ *Extension:* ', 'trim', '298pgwIZK', 'mediafire', '4650285ZIFtON', 'Use example ', ' <url>', 'tags', '36VlLAQa', 'limit', '21JetaBS', '25291CCwgGh', 'map', '\x0a▢ *Size:* ', '2391190kqiKrh', ' https://www.mediafire.com/file/ylrcu62qocn9oxp/Tiago_Mini_-_v10_-_Vers%25C3%25A3o_Stock_%2528com.whatsapp%2529.apk/file', '5086KSfZyE', '424sMYVRD'];
    _0x2a4a = function () {
        return _0x403eff;
    };
    return _0x2a4a();
}
const _0x276ce8 = _0x3aa0;
(function (_0x2fd1d1, _0x2b2a24) {
    const _0x5516b1 = _0x3aa0,
        _0x4c8400 = _0x2fd1d1();
    while (!![]) {
        try {
            const _0x5198aa = -parseInt(_0x5516b1(0x170)) / 0x1 * (-parseInt(_0x5516b1(0x167)) / 0x2) + -parseInt(_0x5516b1(0x161)) / 0x3 * (-parseInt(_0x5516b1(0x16b)) / 0x4) + -parseInt(_0x5516b1(0x172)) / 0x5 + -parseInt(_0x5516b1(0x16d)) / 0x6 + parseInt(_0x5516b1(0x162)) / 0x7 * (-parseInt(_0x5516b1(0x168)) / 0x8) + -parseInt(_0x5516b1(0x176)) / 0x9 * (parseInt(_0x5516b1(0x165)) / 0xa) + parseInt(_0x5516b1(0x16c)) / 0xb;
            if (_0x5198aa === _0x2b2a24) break;
            else _0x4c8400['push'](_0x4c8400['shift']());
        } catch (_0x4439d9) {
            _0x4c8400['push'](_0x4c8400['shift']());
        }
    }
}(_0x2a4a, 0x7d3ea));

function _0x3aa0(_0xa80c13, _0x3ed7df) {
    const _0x2a4ad5 = _0x2a4a();
    return _0x3aa0 = function (_0x3aa0a1, _0x13d700) {
        _0x3aa0a1 = _0x3aa0a1 - 0x161;
        let _0x305db3 = _0x2a4ad5[_0x3aa0a1];
        return _0x305db3;
    }, _0x3aa0(_0xa80c13, _0x3ed7df);
}
import {
    mediafiredl
} from '@bochilteam/scraper';
let handler = async (_0x28af79, {
    conn: _0x28fb63,
    args: _0x34ad5d,
    usedPrefix: _0x4862c7,
    command: _0x5dfaa5
}) => {
    const _0x22b1f8 = _0x3aa0;
    if (!_0x34ad5d[0x0]) throw _0x22b1f8(0x173) + _0x4862c7 + _0x5dfaa5 + _0x22b1f8(0x166);
    let _0x49a6b7 = await mediafiredl(_0x34ad5d[0x0]),
        {
            url: _0x2c864b,
            url2: _0x292c24,
            filename: _0x6fd438,
            ext: _0x54c73c,
            aploud: _0x4091ba,
            filesize: _0x206a1d,
            filesizeH: _0x452017
        } = _0x49a6b7,
        _0x53df7a = ('\x0a    *≡ HASIL*\x0a\x0a┌─⊷ *DOWNLOADER MEDIAFIRE* \x0a▢ *Name:* ' + _0x6fd438 + _0x22b1f8(0x164) + _0x452017 + _0x22b1f8(0x16e) + _0x54c73c + '\x0a▢ *Uploaded:* ' + _0x4091ba + '\x0a└──────────────\x0a\x0a*Wait a moment..* _files are being processed_\x0a')[_0x22b1f8(0x16f)]();
    _0x28af79['reply'](_0x53df7a), await _0x28fb63['sendFile'](_0x28af79[_0x22b1f8(0x169)], _0x2c864b, _0x6fd438, '', _0x28af79, null, {
        'mimetype': _0x54c73c,
        'asDocument': !![]
    });
};
handler[_0x276ce8(0x16a)] = [_0x276ce8(0x171)][_0x276ce8(0x163)](_0xda6c56 => _0xda6c56 + _0x276ce8(0x174)), handler[_0x276ce8(0x175)] = ['downloader'], handler['command'] = /^(mediafire|mf)$/i, handler[_0x276ce8(0x177)] = !![];
export default handler;