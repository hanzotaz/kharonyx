---
title: "subnudger-rs"
description: "Rust based srt subtitles offset tool."
date: "Jul 24 2024"
repoURL: "https://github.com/hanzotaz/subnudger-rs"
---

A simple tool to offset subtitles timings by a given amount of milliseconds built in Rust.

## Building

To build the `subnudger-rs` tool, follow these steps:

```sh
cargo build --release
# if u want to install to your system
mv target/release/subnudger-rs /usr/local/bin
```

## Usage

To use the `subnudger-rs` tool, run the following command:

```sh
subnudger-rs <input>.srt <output>.srt <offset>
```

Replace `<input>.srt` with the path to the input subtitle file, `<output>.srt` with the desired path for the output subtitle file, and `<offset>` with the desired offset in milliseconds.

## Example

Here's an example of how to use the `subnudger-rs` tool to offset a subtitle file:

```sh
subnudger-rs subs.srt subs-offset.srt 500
```

This command will offset the `subs.srt` file by 500 milliseconds and save the result to `subs-offset.srt`.

Feel free to modify the offset value and the file names according to your needs.
