const moment = require('moment-timezone');
const menu = (prefix, pushname) => {
	let p = 0
	return ` *☠V☠e☠N☠o☠M☠*

*ПРИВЕТ* ${pushname}, ДОБРОЕ ВРЕМЯ СУТОК! :)
\
*🪀 ВЛАДЕЛЕЦ* : @${configs.ownerList[0].split('@')[0]}
*🖊️ Prefix* : #


*КОМАНДЫ ДЛЯ АДМИНОВ*
*${p+=1}.* ${prefix}Группа _открыть|закрыть_
*${p+=1}.* ${prefix}Приветствие _on|off_
*${p+=1}.* ${prefix}Обьявление _текст_
*${p+=1}.* ${prefix}Дать Админа _@_
*${p+=1}.* ${prefix}Снять Админа _@_
*${p+=1}.* ${prefix}Удалить _@_
*${p+=1}.* ${prefix}Добавить _номер без +_
*${p+=1}.* ${prefix}Внимание
*${p+=1}.* ${prefix}Сбросить Ссылку
*${p+=1}.* ${prefix}Анти Ссылка

*КОМАНДЫ ДЛЯ ВЛАДЕЛЬЦА*
*${p+=1}.* ${prefix}Заблокировать _@tag_
*${p+=1}.* ${prefix}Разблокировать _@tag_
*${p+=1}.* ${prefix}addvn _replyAudio/vn_
*${p+=1}.* ${prefix}delvn _name_
*${p+=1}.* ${prefix}premium add _@_
*${p+=1}.* ${prefix}premium del _@_
*${p+=1}.* ${prefix}premium list
*${p+=1}.* ${prefix}Очистить все
*${p+=1}.* ${prefix}Сбросить Лимит
*${p+=1}.* ${prefix}Личный
*${p+=1}.* ${prefix}Публичный
`
}

const ingfo = `Этот бот сделан на языке программирования Node.js / JavaScript
Исходный код бота : https://OK GOOOOOOGLE оно тебе ненужно
В случае возникновения ошибки вы можете связаться с владельцем бота, набрав! Владелец

Спасибо за внимание!
`

const listCode = `Kode bahasa jgviy tidak ada\n  Code       Bahasa\n    sq        Albanian\n    ar        Arabic\n    hy        Armenian\n    ca        Catalan\n    zh        Chinese\n    zh-cn     Chinese (China)\n    zh-tw     Chinese (Taiwan)\n    zh-yue    Chinese (Cantonese)\n    hr        Croatian\n    cs        Czech\n    da        Danish\n    nl        Dutch\n    en        English\n    en-au     English (Australia)\n    en-uk     English (United Kingdom)\n    en-us     English (United States)\n    eo        Esperanto\n    fi        Finnish\n    fr        French\n    de        German\n    el        Greek\n    ht        Haitian Creole\n    hi        Hindi\n    hu        Hungarian\n    is        Icelandic\n    id        Indonesian\n    it        Italian\n    ja        Japanese\n    ko        Korean\n    la        Latin\n    lv        Latvian\n    mk        Macedonian\n    no        Norwegian\n    pl        Polish\n    pt        Portuguese\n    pt-br     Portuguese (Brazil)\n    ro        Romanian\n    ru        Russian\n    sr        Serbian\n    sk        Slovak\n    es        Spanish\n    es-es     Spanish (Spain)\n    es-us     Spanish (United States)\n    sw        Swahili\n    sv        Swedish\n    ta        Tamil\n    th        Thai\n    tr        Turkish\n    vi        Vietnamese\n    cy        Welsh\n    `

const mess = {
             wait: 'Минуточку, пожалуйста',
			 group: 'Эту команду можно использовать только в группах!',
			 admin: 'Может использоваться только администратором!',
			 botAdmin: 'Эту команду можно использовать, только если бот является администратором группы',
			 limit: 'Срок действия вашего лимита истек, \n\nПримечание: лимит будет сбрасываться каждый раз В 2.00 По МСК',
			 ownerOnly: 'Эта команда только для владельца!'
}

module.exports = {
	menu,
	listCode,
	mess
}
