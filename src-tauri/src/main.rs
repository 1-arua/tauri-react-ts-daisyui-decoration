// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Error;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str, visitor_type: &str) -> String {
    let greet_prefix = if visitor_type == "newcomer" {
        "Nice to meet you"
    } else if visitor_type == "returning" {
        "Welcome back"
    } else {
        panic!("Invalid visitor type")
    };
    format!("{}, {}! You've been greeted from Rust!", greet_prefix, name)
}

#[tauri::command]
fn secret_greet(secret_msg: &str) -> Result<String, Error> {
    Ok(format!("Your secret message is \"{}\". Thanks!", secret_msg))
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, secret_greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
