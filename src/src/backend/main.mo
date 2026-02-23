import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Int "mo:core/Int";
import Order "mo:core/Order";

actor {
  type ContactInquiry = {
    name : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactInquiry {
    public func compareByTime(inquiry1 : ContactInquiry, inquiry2 : ContactInquiry) : Order.Order {
      Int.compare(inquiry1.timestamp, inquiry2.timestamp);
    };
  };

  let contactMap = Map.empty<Text, ContactInquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, message : Text) : async () {
    if (message.isEmpty()) { Runtime.trap("Message cannot be empty") };
    if (name.isEmpty()) { Runtime.trap("Name cannot be empty") };
    let inquiry : ContactInquiry = {
      name;
      phone;
      message;
      timestamp = Time.now();
    };
    contactMap.add(name, inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [ContactInquiry] {
    let allInquiries = contactMap.values().toArray();
    allInquiries.sort(ContactInquiry.compareByTime);
  };
};
