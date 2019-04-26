#! node

const clone = require('git-clone')
const program = require('commander')
const shell = require('shelljs');
const log = require('tracer').colorConsole()


program
    .version('1.0.4')
    .description('静态资源工程的cli')
program
    .command('* <tpl> <project>')
    .action(function(tpl, project) {
        log.info('目前static-cli支持各种css语言定制：stylus')
        log.info('使用例子：dgg-static-cli stylus myproject')
        if (tpl && project) {
            let pwd = shell.pwd()
            log.info(`正在拉取模板代码，下载位置：${pwd}/${project}/ ...`)
            clone(`https://github.com/FengLin2016/static-cli.git`, pwd + `/${project}`, null, function() {
                shell.rm('-rf', pwd + `/${project}/.git`)
                log.info('模板工程建立完成')
            })
        } else {
            log.error('正确命令例子：dgg-static-cli stylus myproject')
        }
    })
program.parse(process.argv)