from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Game states dictionary
game_states = {
    "start": {
        "text": "Are you ready, YES or NO?",
        "options": ["yes", "no"],
        "next": {"yes": "split", "no": "not_ready"}
    },
    "not_ready": {
        "text": "You will never be truly ready.",
        "options": []
    },
    "split": {
        "text": "You come to a 4-way split. Go STRAIGHT, LEFT, RIGHT, BACK or SECRET?",
        "options": ["straight", "left", "right", "back", "secret"],
        "next": {
            "left": "left_thicket",
            "right": "right_split",
            "straight": "cottage",
            "back": "back_loop",
            "secret": "secret_hatch"
        }
    },
    # Add more states here as you expand the game
    "left_thicket": {
        "text": "You come to a thicket of bushes. Go AROUND or THRU?",
        "options": ["around", "thru"],
        "next": {"around": "left_beach", "thru": "mosquito_loss"}
    },
    "mosquito_loss": {
        "text": "You got stuck in the thicket and eaten by mosquitoes!!!! YOU LOSE",
        "options": []
    }
}

@app.route("/", methods=["GET", "POST"])
def game():
    state = request.args.get("state", "start")
    current = game_states.get(state, {
        "text": "That answer is not correct.",
        "options": []
    })

    if request.method == "POST":
        choice = request.form["choice"].lower()
        next_state = current.get("next", {}).get(choice, "invalid")
        return redirect(url_for("game", state=next_state))

    return render_template("game.html", text=current["text"], options=current["options"])

if __name__ == "__main__":
    app.run(debug=True)