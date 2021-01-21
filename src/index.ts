import figures from "figures";
import chalk from "chalk";
import prettyError from "pretty-error";
import i18n, { __ } from "i18n";
import { sprintf } from "sprintf-js";

import ModuleManager from "./modules/manager";
import Arguments from "./modules/arguments";
import Directory from "./modules/directory";
import Logger from "./modules/logger";
import Client from "./modules/client";
import Command from "./modules/command";
import Prompt from "./modules/prompt";

import Timer from "./utils/timer";
console.log("hello, peyayan!Yes<! iiyokoiyo!ikuiku!");
prettyError.start();
i18n.configure({
    locales: [ "en" ],
    directory: `${__dirname}/locales`,
    defaultLocale: "en"
    //defaultLocale: Intl.DateTimeFormat().resolvedOptions().locale === "ja-JP" ? "ja" : "en"
});

const hasVerbose = /(-v|--verbose)/.test(process.argv.join());

if (hasVerbose) {
    Timer.time();

    console.log(chalk.magentaBright(figures.pointer) + " " + __("Module resolution step:"));
}

const manager = new ModuleManager([
    new Arguments(),
    new Directory(),
    new Logger(),
    new Client(),
    new Command(),
    new Prompt()
]);

if (hasVerbose) {
    console.log(chalk.greenBright(figures.tick) + " " + __("All modules have been resolved successfully. " + Timer.prettyTime()));
}

export default manager;

if (hasVerbose) {
    console.log("Exported Module Manager.");
}

const main = async () => {
    if (hasVerbose) {
        console.log(chalk.magentaBright(figures.pointer) + " " + __("Module initialize step:"));
    }

    await manager.initAllModules();

    Timer.time();

    const parsedArguments = manager.use("Arguments Manager");
    const [ , verboseLogger ] = manager.use("Logger");

    verboseLogger.info(__("Modules loaded. ") + Timer.prettyTime());
    console.info(chalk`\n{magentaBright ${figures.pointer}} {bold ${sprintf(__("Welcome to the client operator of %s. The commands end with semicolon ';'."), chalk.greenBright(parsedArguments.host))}}`);
    console.info(chalk`\n{dim.italic ${(() => {
        const items = [
            "ほーん、で？どうしたいの？",
            "一切手をつけないのも、過ぎた最適化を行うのもよろしくない行為である。間を貫き通せ。",
            "時間の無駄になりそうならせめてOSSにしてしまおう。何も起きないよりも一生待ちぼうけしてた方がマシでしょ？",
            "う　ご　い　た　！　リ　リ　ー　ス　だ　！",
            "バグ == 仕様 -> true",
            "バグが治らないのは私が間違っているからではない。言語の仕様が間違っている。",
            "コンピューターを人間らしくしたら、プログラミングはされなくなる。ヲタク達の倫理観が崩れるよ。",
            "ファイアウォールも名前のくせして燃やしたら壊れる。"
        ];

        return items[Math.floor(Math.random() * items.length)];
    })()}}`);
    console.log("\nType \"help [command];\" for help.\n");

    const exitCode = manager.use("Prompt")(0);

    console.log(chalk`{greenBright Good bye.}`);
    await manager.closeAllModules();
    process.exit(exitCode);
};

main().then();


