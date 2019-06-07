#! node

const clone = require('git-clone')
const program = require('commander')
const shell = require('shelljs');
const log = require('tracer').colorConsole()


program
  .version('1.0.5')
  .description('静态资源工程的cli')
program
  .command('* <tpl> <project>')
  .action(function (tpl, project) {
    if (tpl && project) {
      let pwd = shell.pwd()
      log.info(`正在拉取模板代码，下载位置：${pwd}/${project}/ ...`)
      let opts = null
      tpl!='stylus' && (opts = {checkout: `${tpl}`})
      clone(`https://github.com/FengLin2016/static-cli.git`, pwd + `/${project}`, opts, function () {
        shell.rm('-rf', pwd + `/${project}/.git`)
        log.info('模板工程建立完成')
      })
    } else {
      log.error('正确命令例子：dgg-static-cli stylus myproject')
    }
  })
program.parse(process.argv)