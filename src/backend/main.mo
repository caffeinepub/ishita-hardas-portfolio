import Time "mo:core/Time";
import Int "mo:core/Int";
import Text "mo:core/Text";
import List "mo:core/List";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compare(cs1 : ContactSubmission, cs2 : ContactSubmission) : Order.Order {
      Int.compare(cs1.timestamp, cs2.timestamp);
    };
  };

  let submissions = List.empty<ContactSubmission>();

  public shared ({ caller }) func submitContact(name : Text, email : Text, message : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or message.isEmpty()) {
      Runtime.trap("All fields are required for contact submission.");
    };

    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };

    submissions.add(submission);
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    submissions.toArray().sort();
  };
};
