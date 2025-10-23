if (!messages || !Array.isArray(messages) || messages.length === 0) {
  return NextResponse.json({ ok: false, error: "messages[] required" }, { status: 400 });
}

if (broadcast === true) {
  await broadcastMessage(messages);
  return NextResponse.json({ ok: true, mode: "broadcast" });
}

if (Array.isArray(toMany) && toMany.length > 0) {
  await multicastMessage(toMany, messages);
  return NextResponse.json({ ok: true, mode: "multicast", count: toMany.length });
}

if (typeof to === "string" && to) {
  await pushMessage(to, messages);
  return NextResponse.json({ ok: true, mode: "push", to });
}

return NextResponse.json(
  { ok: false, error: "Provide either { to }, { toMany: [] }, or { broadcast: true }" },
  { status: 400 }
);
