"use strict";

/**
 * Configs
 */
var configs = (function () {
	var instance;
	var Singleton = function (options) {
		var options = options || Singleton.defaultOptions;
		for (var key in Singleton.defaultOptions) {
			this[key] = options[key] || Singleton.defaultOptions[key];
		}
	};
	Singleton.defaultOptions = {
		general_help:
			"Below there's a list of commands that you can use.\nYou can use autofill by pressing the TAB key, autocompleting if there's only 1 possibility, or showing you a list of possibilities.",
		ls_help:
			"List information about the files and folders (the current directory by default).",
		cat_help:
			"Read FILE(s) content and print it to the standard output (screen).",
		whoami_help:
			"Print the user name associated with the current effective user ID and more info.",
		date_help: "Print the system date and time.",
		help_help: "Print this menu.",
		clear_help: "Clear the terminal screen.",
		reboot_help: "Reboot the system.",
		cd_help: "Change the current working directory.",
		mv_help: "Move (rename) files.",
		rm_help: "Remove files or directories.",
		rmdir_help:
			"Remove directory, this command will only work if the folders are empty.",
		touch_help:
			"Change file timestamps. If the file doesn't exist, it's created an empty one.",
		sudo_help: "Execute a command as the superuser.",
		welcome:
			"Welcome to Loen's ICAN website!\nThis isn't a regular website, as you've noticed, and you'll have to control it by running commands. \nSimple starter commands are 'ls' and 'cat'. You can find out more about them using 'help' ",
		internet_explorer_warning:
			"NOTE: I see you're using internet explorer, this website won't work properly.",
		welcome_file_name: "welcome_message.txt",
		invalid_command_message: "<value>: command not found.",
		reboot_message:
			"Preparing to reboot...\n\n3...\n\n2...\n\n1...\n\nRebooting...\n\n",
		permission_denied_message: "Unable to '<value>', permission denied.",
		sudo_message: "Unable to sudo using a web client.",
		usage: "Usage",
		file: "file",
		file_not_found: "File '<value>' not found.",
		username: "Visitor",
		hostname: "ican_website",
		platform: "Platform",
		accesible_cores: "Accessible cores",
		language: "Language",
		value_token: "<value>",
		host: "https://yoyodotpy.github.io/ican_website/",
		user: "visitor",
		is_root: true,
		type_delay: 20,
	};
	return {
		getInstance: function (options) {
			instance === void 0 && (instance = new Singleton(options));
			return instance;
		},
	};
})();

/**
 * Your files here
 */
var files = (function () {
	var instance;
	var Singleton = function (options) {
		var options = options || Singleton.defaultOptions;
		for (var key in Singleton.defaultOptions) {
			this[key] = options[key] || Singleton.defaultOptions[key];
		}
	};
	Singleton.defaultOptions = {
		"about_me.txt": {
			text: "My name is Loen and I am an ICAN student. We've done a lot of things through the years, so feel free to go through the other files.",
			image: "img/icon.svg", // relative to index.html
		},
		"after_effects_airplane.txt": {
			text: "It's a plane made in After Effects",
			image: "img/aeroplane.png", // relative to index.html
		},
		"free_birds_poster.txt": {
			text: "I made a funny lil 1940s horror poster for a movie called Free Birds.",
			image: "img/free_birds_1940_edition.png",
		},

		"joker_comic.txt": {
			text: "A coloured in Joker comic panel.",
			image: "img/jonkler.png",
		},

		"launcher_prototypes.txt": {
			text: "Some prototypes made for a launcher project in ICAN.",
			image: "img/launcher.png",
		},

		"jons_regrets.txt": {
			text: "A modified image of Jon from Garfield & Co. to feature some of Garfield's signature moments. Made in Photoshop.",
			image: "img/im-sorry-jon.png",
		},

		"minecraft_piston_door.txt": {
			text: "We were learning about algebraic notation and simplification in ICAN sec 2, and this is a simplified algebraic notation powering a door when certain levers are pulled.",
			image: "img/simplified.png",
		},

		"custom_roblox_character.txt": {
			text: "I made a custom character in Blender that works in Roblox. It's inspired by the little green men stereotype.",
			image: "img/alien_roblox_guy.png",
		},

		"custom_boomerang.txt": {
			text: "I made a custom boomerang in Blender.",
			image: "img/boomerang.png",
		},

		"custom_boat.txt": {
			text: "I made a custom boat in Blender. Currently sliced in half to show the cross section.",
			image: "img/boat.png",
		},

		"fusebead_pixel_art.txt": {
			text: "I made a pixel art Glados on an NES cartridge, then recreated it using fusebeads in ICAN.",
			image: "img/fusebead.jpg",
		},

		"pocket_milk_box.txt": {
			text: "I went into Photoshop and made a Pocket Milk product box. We worked in teams.",
			image: "img/pocket milk.png",
		},

		"ican_portfolio_website.txt": {
			text: "I made this ICAN portfolio website for an expo. You can see it online at https://yoyodotpy.github.io/ican_website. This is the old one that wasn't very good.",
			image: "img/website.png",
		},
		"couch_explosion.txt": {
			text: "This is a couch explosion animation made in Unity using models made in Blender, with particles made using Unity's particle system.",
			image: "img/sec3/couchsplode.webm",
		},
		"iot_diagrams.txt": {
			text: "We had an assignment where we needed to make custom IOT systems.",
			image: "img/sec3/diagrams.png",
		},
		"fnal.txt": {
			text: "We made our own game for a game jam, where you run from one of our teachers. We ended up winning three awards.",
			image: "img/sec3/fnal.webm",
		},
		"navmesh_character.txt": {
			text: "This assignment was making a character controlled by a navmesh to go where you click.",
			image: "img/sec3/navmesh.webm",
		},
		"rebrand_presentation.txt": {
			text: "They made us come up with and present rebrand names for our program, mine was STEAM.",
			image: "img/sec3/steamlogo.png",
		},
		"spritesheet.txt": {
			text: "I made a sprite sheet for Unity.",
			image: "img/sec3/boxboy.png",
		},
		"callsign_miami.txt": {
			text: "We made a game during choice day, ours about shooting people as a plane.",
			image: "img/sec3/callsign.webm",
		},
	};
	return {
		getInstance: function (options) {
			instance === void 0 && (instance = new Singleton(options));
			return instance;
		},
	};
})();

var main = (function () {
	/**
	 * Aux functions
	 */
	var isUsingIE =
		window.navigator.userAgent.indexOf("MSIE ") > 0 ||
		!!navigator.userAgent.match(/Trident.*rv\:11\./);

	var ignoreEvent = function (event) {
		event.preventDefault();
		event.stopPropagation();
	};

	var scrollToBottom = function () {
		window.scrollTo(0, document.body.scrollHeight);
	};

	var isURL = function (str) {
		return (
			(str.startsWith("http") || str.startsWith("www")) &&
			str.indexOf(" ") === -1 &&
			str.indexOf("\n") === -1
		);
	};

	/**
	 * Model
	 */
	var InvalidArgumentException = function (message) {
		this.message = message;
		// Use V8's native method if available, otherwise fallback
		if ("captureStackTrace" in Error) {
			Error.captureStackTrace(this, InvalidArgumentException);
		} else {
			this.stack = new Error().stack;
		}
	};
	// Extends Error
	InvalidArgumentException.prototype = Object.create(Error.prototype);
	InvalidArgumentException.prototype.name = "InvalidArgumentException";
	InvalidArgumentException.prototype.constructor = InvalidArgumentException;

	var cmds = {
		LS: { value: "ls", help: configs.getInstance().ls_help },
		CAT: { value: "cat", help: configs.getInstance().cat_help },
		WHOAMI: { value: "whoami", help: configs.getInstance().whoami_help },
		DATE: { value: "date", help: configs.getInstance().date_help },
		HELP: { value: "help", help: configs.getInstance().help_help },
		CLEAR: { value: "clear", help: configs.getInstance().clear_help },
		REBOOT: { value: "reboot", help: configs.getInstance().reboot_help },
		CD: { value: "cd", help: configs.getInstance().cd_help },
		MV: { value: "mv", help: configs.getInstance().mv_help },
		RM: { value: "rm", help: configs.getInstance().rm_help },
		RMDIR: { value: "rmdir", help: configs.getInstance().rmdir_help },
		TOUCH: { value: "touch", help: configs.getInstance().touch_help },
		SUDO: { value: "sudo", help: configs.getInstance().sudo_help },
	};

	var Terminal = function (
		prompt,
		cmdLine,
		output,
		//sidenav,
		//profilePic,
		user,
		host,
		root,
		outputTimer,
	) {
		if (!(prompt instanceof Node) || prompt.nodeName.toUpperCase() !== "DIV") {
			throw new InvalidArgumentException(
				"Invalid value " + prompt + " for argument 'prompt'.",
			);
		}
		if (
			!(cmdLine instanceof Node) ||
			cmdLine.nodeName.toUpperCase() !== "INPUT"
		) {
			throw new InvalidArgumentException(
				"Invalid value " + cmdLine + " for argument 'cmdLine'.",
			);
		}
		if (!(output instanceof Node) || output.nodeName.toUpperCase() !== "DIV") {
			throw new InvalidArgumentException(
				"Invalid value " + output + " for argument 'output'.",
			);
		}
		//if (
		//  !(sidenav instanceof Node) ||
		//  sidenav.nodeName.toUpperCase() !== "DIV"
		//) {
		//  throw new InvalidArgumentException(
		//    "Invalid value " + sidenav + " for argument 'sidenav'.",
		//  );
		//}
		//if (
		//  !(profilePic instanceof Node) ||
		//  profilePic.nodeName.toUpperCase() !== "IMG"
		//) {
		//  throw new InvalidArgumentException(
		//    "Invalid value " + profilePic + " for argument 'profilePic'.",
		//  );
		//}
		typeof user === "string" &&
			typeof host === "string" &&
			(this.completePrompt = user + "@" + host + ":~" + (root ? "#" : "$"));
		//this.profilePic = profilePic;
		this.prompt = prompt;
		this.cmdLine = cmdLine;
		this.output = output;
		//this.sidenav = sidenav;
		//this.sidenavOpen = false;
		//this.sidenavElements = [];
		this.typeSimulator = new TypeSimulator(outputTimer, output);
	};

	Terminal.prototype.type = function (text, callback) {
		this.typeSimulator.type(text, callback);
	};

	Terminal.prototype.exec = function () {
		var command = this.cmdLine.value;
		this.cmdLine.value = "";
		this.prompt.textContent = "";
		this.output.innerHTML +=
			'<span class="prompt-color">' +
			this.completePrompt +
			"</span> " +
			command +
			"<br/>";
	};

	Terminal.prototype.init = function () {
		//this.sidenav.addEventListener("click", ignoreEvent);
		this.cmdLine.disabled = true;
		//this.sidenavElements.forEach(function (elem) {
		//  elem.disabled = true;
		//
		//this.prepareSideNav();
		this.lock(); // Need to lock here since the sidenav elements were just added
		//document.body.addEventListener(
		//  "click",
		//  function (event) {
		//    if (this.sidenavOpen) {
		//      this.handleSidenav(event);
		//    }
		//    this.focus();
		//  }.bind(this),
		//);
		this.cmdLine.addEventListener(
			"keydown",
			function (event) {
				if (event.which === 13 || event.keyCode === 13) {
					this.handleCmd();
					ignoreEvent(event);
				} else if (event.which === 9 || event.keyCode === 9) {
					this.handleFill();
					ignoreEvent(event);
				}
			}.bind(this),
		);
		this.reset();
	};

	Terminal.makeElementDisappear = function (element) {
		element.style.opacity = 0;
		element.style.transform = "translateX(-300px)";
	};

	Terminal.makeElementAppear = function (element) {
		element.style.opacity = 1;
		element.style.transform = "translateX(0)";
	};

	//  Terminal.prototype.prepareSideNav = function () {
	//    var capFirst = (function () {
	//      return function (string) {
	//        return string.charAt(0).toUpperCase() + string.slice(1);
	//      };
	//    })();
	//    for (var file in files.getInstance()) {
	//      var element = document.createElement("button");
	//      Terminal.makeElementDisappear(element);
	//      element.onclick = function (file, event) {
	//        this.handleSidenav(event);
	//        this.cmdLine.value = "cat " + file + " ";
	//        this.handleCmd();
	//      }.bind(this, file);
	//      element.appendChild(
	//        document.createTextNode(
	//          capFirst(file.replace(/\.[^/.]+$/, "").replace(/_/g, " ")),
	//        ),
	//      );
	//      this.sidenav.appendChild(element);
	//      this.sidenavElements.push(element);
	//    }
	// Shouldn't use document.getElementById but Terminal is already using loads of params
	//    document
	//      .getElementById("sidenavBtn")
	//      .addEventListener("click", this.handleSidenav.bind(this));
	//  };

	//  Terminal.prototype.handleSidenav = function (event) {
	//    if (this.sidenavOpen) {
	//      //this.profilePic.style.opacity = 0;
	//      this.sidenavElements.forEach(Terminal.makeElementDisappear);
	//      this.sidenav.style.width = "50px";
	//      document.getElementById("sidenavBtn").innerHTML = "&#9776;";
	//      this.sidenavOpen = false;
	//    } else {
	//      this.sidenav.style.width = "300px";
	//      this.sidenavElements.forEach(Terminal.makeElementAppear);
	//      document.getElementById("sidenavBtn").innerHTML = "&times;";
	//      //this.profilePic.style.opacity = 1;
	//      this.sidenavOpen = true;
	//    }
	//    document.getElementById("sidenavBtn").blur();
	//    ignoreEvent(event);
	//  };

	Terminal.prototype.lock = function () {
		this.exec();
		this.cmdLine.blur();
		this.cmdLine.disabled = true;
		//    this.sidenavElements.forEach(function (elem) {
		//      elem.disabled = true;
		//    });
	};

	Terminal.prototype.unlock = function () {
		this.cmdLine.disabled = false;
		this.prompt.textContent = this.completePrompt;
		//this.sidenavElements.forEach(function (elem) {
		//  elem.disabled = false;
		//});
		scrollToBottom();
		this.focus();
	};

	Terminal.prototype.handleFill = function () {
		var cmdComponents = this.cmdLine.value.trim().split(" ");
		if (
			cmdComponents.length <= 1 ||
			(cmdComponents.length === 2 && cmdComponents[0] === cmds.CAT.value)
		) {
			this.lock();
			var possibilities = [];
			if (cmdComponents[0].toLowerCase() === cmds.CAT.value) {
				if (cmdComponents.length === 1) {
					cmdComponents[1] = "";
				}
				if (
					configs
						.getInstance()
						.welcome_file_name.startsWith(cmdComponents[1].toLowerCase())
				) {
					possibilities.push(
						cmds.CAT.value + " " + configs.getInstance().welcome_file_name,
					);
				}
				for (var file in files.getInstance()) {
					if (file.startsWith(cmdComponents[1].toLowerCase())) {
						possibilities.push(cmds.CAT.value + " " + file);
					}
				}
			} else {
				for (var command in cmds) {
					if (cmds[command].value.startsWith(cmdComponents[0].toLowerCase())) {
						possibilities.push(cmds[command].value);
					}
				}
			}
			if (possibilities.length === 1) {
				this.cmdLine.value = possibilities[0] + " ";
				this.unlock();
			} else if (possibilities.length > 1) {
				this.type(
					possibilities.join("\n"),
					function () {
						this.cmdLine.value = cmdComponents.join(" ");
						this.unlock();
					}.bind(this),
				);
			} else {
				this.cmdLine.value = cmdComponents.join(" ");
				this.unlock();
			}
		}
	};

	Terminal.prototype.handleCmd = function () {
		var cmdComponents = this.cmdLine.value.trim().split(" ");
		this.lock();
		switch (cmdComponents[0]) {
			case cmds.CAT.value:
				this.cat(cmdComponents);
				break;
			case cmds.LS.value:
				this.ls();
				break;
			case cmds.WHOAMI.value:
				this.whoami();
				break;
			case cmds.DATE.value:
				this.date();
				break;
			case cmds.HELP.value:
				this.help();
				break;
			case cmds.CLEAR.value:
				this.clear();
				break;
			case cmds.REBOOT.value:
				this.reboot();
				break;
			case cmds.CD.value:
			case cmds.MV.value:
			case cmds.RMDIR.value:
			case cmds.RM.value:
			case cmds.TOUCH.value:
				this.permissionDenied(cmdComponents);
				break;
			case cmds.SUDO.value:
				this.sudo();
				break;
			default:
				this.invalidCommand(cmdComponents);
				break;
		}
	};

	function renderMediaWithText(text, mediaUrl) {
		// Check if the URL ends with a common video extension
		var isVideo = /\.(mp4|webm|ogg)$/i.test(mediaUrl);
		var mediaHtml = "";

		if (isVideo) {
			mediaHtml = `<video src="${mediaUrl}" style="max-width:300px; border-radius:6px;" autoplay loop muted playsinline controls></video>`;
		} else {
			mediaHtml = `<img src="${mediaUrl}" style="max-width:300px; border-radius:6px;" />`;
		}

		return `
      <div style="
        display:flex;
        gap:16px;
        align-items:flex-start;
      ">
        ${mediaHtml}
        <div style="white-space:pre-wrap;">${text}</div>
      </div>
    `;
	}

	Terminal.prototype.cat = function (cmdComponents) {
		let result;

		if (cmdComponents.length <= 1) {
			result =
				configs.getInstance().usage +
				": " +
				cmds.CAT.value +
				" <" +
				configs.getInstance().file +
				">";
		} else if (!files.getInstance().hasOwnProperty(cmdComponents[1])) {
			result = configs
				.getInstance()
				.file_not_found.replace(
					configs.getInstance().value_token,
					cmdComponents[1],
				);
		} else {
			const file = files.getInstance()[cmdComponents[1]];

			// 🔹 Support object-based file (text + image/video)
			// Added support for 'file.media' in case you want to rename your keys later,
			// but it falls back to 'file.image' so your current config stays intact.
			if (typeof file === "object" && file.text && (file.image || file.media)) {
				const mediaUrl = file.media || file.image;
				this.output.innerHTML += renderMediaWithText(file.text, mediaUrl);
				this.output.innerHTML += "<br/>";
				this.unlock();
				return;
			}

			// 🔹 Old behavior (plain text)
			// If it's an object but only has text, just grab the text. Otherwise grab the string.
			result = typeof file === "object" ? file.text : file;
		}

		this.type(result, this.unlock.bind(this));
	};

	Terminal.prototype.ls = function () {
		var result = ".\n..\n" + configs.getInstance().welcome_file_name + "\n";
		for (var file in files.getInstance()) {
			result += file + "\n";
		}
		this.type(result.trim(), this.unlock.bind(this));
	};

	Terminal.prototype.sudo = function () {
		this.type(configs.getInstance().sudo_message, this.unlock.bind(this));
	};

	Terminal.prototype.whoami = function (cmdComponents) {
		var result =
			configs.getInstance().username +
			": " +
			configs.getInstance().user +
			"\n" +
			configs.getInstance().hostname +
			": " +
			configs.getInstance().host +
			"\n" +
			configs.getInstance().platform +
			": " +
			navigator.platform +
			"\n" +
			configs.getInstance().accesible_cores +
			": " +
			navigator.hardwareConcurrency +
			"\n" +
			configs.getInstance().language +
			": " +
			navigator.language;
		this.type(result, this.unlock.bind(this));
	};

	Terminal.prototype.date = function (cmdComponents) {
		this.type(new Date().toString(), this.unlock.bind(this));
	};

	Terminal.prototype.help = function () {
		var result = configs.getInstance().general_help + "\n\n";
		for (var cmd in cmds) {
			result += cmds[cmd].value + " - " + cmds[cmd].help + "\n";
		}
		this.type(result.trim(), this.unlock.bind(this));
	};

	Terminal.prototype.clear = function () {
		this.output.textContent = "";
		this.prompt.textContent = "";
		this.prompt.textContent = this.completePrompt;
		this.unlock();
	};

	Terminal.prototype.reboot = function () {
		this.type(configs.getInstance().reboot_message, this.reset.bind(this));
	};

	Terminal.prototype.reset = function () {
		this.output.textContent = "";
		this.prompt.textContent = "";
		if (this.typeSimulator) {
			this.type(
				configs.getInstance().welcome +
					(isUsingIE
						? "\n" + configs.getInstance().internet_explorer_warning
						: ""),
				function () {
					this.unlock();
				}.bind(this),
			);
		}
	};

	Terminal.prototype.permissionDenied = function (cmdComponents) {
		this.type(
			configs
				.getInstance()
				.permission_denied_message.replace(
					configs.getInstance().value_token,
					cmdComponents[0],
				),
			this.unlock.bind(this),
		);
	};

	Terminal.prototype.invalidCommand = function (cmdComponents) {
		this.type(
			configs
				.getInstance()
				.invalid_command_message.replace(
					configs.getInstance().value_token,
					cmdComponents[0],
				),
			this.unlock.bind(this),
		);
	};

	Terminal.prototype.focus = function () {
		this.cmdLine.focus();
	};

	var TypeSimulator = function (timer, output) {
		var timer = 0.1;
		if (timer === Number.NaN || timer < 0) {
			throw new InvalidArgumentException(
				"Invalid value " + timer + " for argument 'timer'.",
			);
		}
		if (!(output instanceof Node)) {
			throw new InvalidArgumentException(
				"Invalid value " + output + " for argument 'output'.",
			);
		}
		this.timer = timer;
		this.output = output;
	};

	TypeSimulator.prototype.type = function (text, callback) {
		if (isURL(text)) {
			window.open(text);
		}
		var i = 0;
		var output = this.output;
		var timer = this.timer;
		var skipped = false;
		var skip = function () {
			skipped = true;
		}.bind(this);
		document.addEventListener("dblclick", skip);
		(function typer() {
			if (i < text.length) {
				var char = text.charAt(i);
				var isNewLine = char === "\n";
				output.innerHTML += isNewLine ? "<br/>" : char;
				i++;
				if (!skipped) {
					setTimeout(typer, isNewLine ? timer * 2 : timer);
				} else {
					output.innerHTML +=
						text.substring(i).replace(new RegExp("\n", "g"), "<br/>") + "<br/>";
					document.removeEventListener("dblclick", skip);
					callback();
				}
			} else if (callback) {
				output.innerHTML += "<br/>";
				document.removeEventListener("dblclick", skip);
				callback();
			}
			scrollToBottom();
		})();
	};

	return {
		listener: function () {
			new Terminal(
				document.getElementById("prompt"),
				document.getElementById("cmdline"),
				document.getElementById("output"),
				//document.getElementById("sidenav"),
				//document.getElementById("profilePic"),
				configs.getInstance().user,
				configs.getInstance().host,
				configs.getInstance().is_root,
				configs.getInstance().type_delay,
			).init();
		},
	};
})();

window.onload = main.listener;
